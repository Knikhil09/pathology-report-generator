import java.awt.Desktop;
import java.io.File;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

public class PathologyLauncher {

    public static void main(String[] args) {

        try {
            File appDirectory = new File(
                    System.getProperty("user.home"),
                    "PathologyReportGenerator"
            );

            if (!appDirectory.exists()) {
                appDirectory.mkdirs();
            }

            File springBootJar = new File(
                    appDirectory,
                    "pathology-report-api.jar"
            );

            // Extract Spring Boot JAR
            if (!springBootJar.exists()) {

                try (InputStream input =
                             PathologyLauncher.class.getResourceAsStream(
                                     "/pathology-report-api-0.0.1-SNAPSHOT.jar")) {

                    if (input == null) {
                        throw new RuntimeException(
                                "Spring Boot JAR not found."
                        );
                    }

                    Files.copy(
                            input,
                            springBootJar.toPath(),
                            StandardCopyOption.REPLACE_EXISTING
                    );
                }
            }

            // Use the Java runtime bundled by jpackage
            String javaExecutable =
                    System.getProperty("java.home")
                            + File.separator
                            + "bin"
                            + File.separator
                            + "java.exe";

            Process process = new ProcessBuilder(
                    javaExecutable,
                    "-jar",
                    springBootJar.getAbsolutePath()
            )
            .redirectErrorStream(true)
            .start();

            // Wait for Spring Boot
            waitForApplication();

            // Open browser
            Desktop.getDesktop().browse(
                    new URI("http://localhost:8080")
            );

            // Keep application process alive
            process.waitFor();

        } catch (Exception e) {
            showError(e);
        }
    }

    private static void waitForApplication()
            throws InterruptedException {

        int maxAttempts = 60;

        for (int i = 0; i < maxAttempts; i++) {

            try {
                URL url = new URL("http://localhost:8080");

                HttpURLConnection connection =
                        (HttpURLConnection) url.openConnection();

                connection.setConnectTimeout(1000);
                connection.setReadTimeout(1000);

                int responseCode =
                        connection.getResponseCode();

                if (responseCode >= 200 &&
                    responseCode < 500) {

                    connection.disconnect();
                    return;
                }

                connection.disconnect();

            } catch (Exception ignored) {
            }

            Thread.sleep(1000);
        }

        throw new RuntimeException(
                "Pathology Report Generator could not start."
        );
    }

    private static void showError(Exception e) {

        try {
            javax.swing.JOptionPane.showMessageDialog(
                    null,
                    "Pathology Report Generator could not start.\n\n"
                            + e.getMessage(),
                    "Pathology Report Generator",
                    javax.swing.JOptionPane.ERROR_MESSAGE
            );
        } catch (Exception ignored) {
        }
    }
}