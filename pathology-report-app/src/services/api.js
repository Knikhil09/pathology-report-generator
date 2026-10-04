const API_BASE_URL = ""

export const checkBackend = async () => {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
        throw new Error(`Backend request failed: ${response.status}`);
    }

    return response.text();
};

export const generateReport = async (formData) => {
    const response = await fetch(
        `${API_BASE_URL}/api/reports/generate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
    );

    if (!response.ok) {

        const errorText = await response.text();

        console.error("Backend error:", errorText);

        throw new Error(
            errorText || `Report generation failed: ${response.status}`
        );
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "pathology-report.docx";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
}; 