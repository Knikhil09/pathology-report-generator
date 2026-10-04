import { useState } from "react";
import { generateReport } from "./services/api";
import { REPORT_TEMPLATES, DOCTORS } from "./config/reportTemplates";
import "./App.css";

function App() {
  
    const [showPreview, setShowPreview] = useState(false);

    const [formData, setFormData] = useState({
        templateId: "histopathology",
        patientName: "",
        age: "",
        sex: "",
        histoNo: "",
        opdIpd: "",
        wardUnit: "",
        regdNo: "",
        specimenReceivedDate: "",
        reportingDate: "",
        natureOfSpecimen: "",
        grossExamination: "",
        microscopicExamination: "",
        impression: "",


        doctor1Id: "",
        doctor1Name: "",
        doctor1Designation: "",

        doctor2Id: "",
        doctor2Name: "",
        doctor2Designation: "",

        doctor3Id: "",
        doctor3Name: "",
        doctor3Designation: ""

    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleTemplateChange = (event) => {

        const templateId = event.target.value;

        const selectedTemplate = REPORT_TEMPLATES.find(
            template => template.id === templateId
        );

        if (!selectedTemplate) {
            return;
        }

        setFormData(prev => ({
            ...prev,

            templateId: selectedTemplate.id,

            natureOfSpecimen:
                selectedTemplate.defaults.natureOfSpecimen,

            grossExamination:
                selectedTemplate.defaults.grossExamination,

            microscopicExamination:
                selectedTemplate.defaults.microscopicExamination,

            impression:
                selectedTemplate.defaults.impression
        }));

        setShowPreview(false);
    };

    const handleDoctorChange = (doctorNumber, doctorId) => {
        const selectedDoctor = DOCTORS.find(
            doctor => doctor.id === doctorId
        );

        setFormData(prev => ({
            ...prev,
            [`doctor${doctorNumber}Id`]: doctorId,
            [`doctor${doctorNumber}Name`]: selectedDoctor?.name || ""
        }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      console.log("Report Data:", formData);

      setShowPreview(true);
  };

    const handleReset = () => {
        setFormData({
            template: "Histopathology Report",
            patientName: "",
            age: "",
            sex: "",
            histoNo: "",
            opdIpd: "",
            wardUnit: "",
            regdNo: "",
            specimenReceivedDate: "",
            reportingDate: "",
            natureOfSpecimen: "",
            grossExamination: "",
            microscopicExamination: "",
            impression: ""
        });
    };

    return (
        <div className="app">

            <header className="app-header">
                <h1>Pathology Report Generation System</h1>
                <p>Create pathology reports using predefined templates</p>
            </header>

            <main className="report-container">

                <form onSubmit={handleSubmit}>

                    {/* TEMPLATE */}

                    <div className="form-group">

                        <label>Report Template</label>

                        <select
                            name="templateId"
                            value={formData.templateId}
                            onChange={handleTemplateChange}
                        >
                            {REPORT_TEMPLATES.map(template => (
                                <option
                                    key={template.id}
                                    value={template.id}
                                >
                                    {template.name}
                                </option>
                            ))}
                        </select>

                    </div>


                    {/* PATIENT INFORMATION */}

                    <section className="form-section">
                        <h2>Patient Information</h2>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Name of Patient</label>

                                <input
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    placeholder="Enter patient name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Age</label>

                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="Age"
                                />
                            </div>

                            <div className="form-group">
                                <label>Sex</label>

                                <select
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                >
                                    <option value="">Select sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Histo. No.</label>

                                <input
                                    type="text"
                                    name="histoNo"
                                    value={formData.histoNo}
                                    onChange={handleChange}
                                    placeholder="Enter histo. number"
                                />
                            </div>

                        </div>
                    </section>


                    {/* REGISTRATION */}

                    <section className="form-section">
                        <h2>Registration Details</h2>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>OPD / IPD</label>

                                <select
                                    name="opdIpd"
                                    value={formData.opdIpd}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="OPD">OPD</option>
                                    <option value="IPD">IPD</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Ward / Unit</label>

                                <input
                                    type="text"
                                    name="wardUnit"
                                    value={formData.wardUnit}
                                    onChange={handleChange}
                                    placeholder="Enter ward / unit"
                                />
                            </div>

                            <div className="form-group">
                                <label>Regd. No.</label>

                                <input
                                    type="text"
                                    name="regdNo"
                                    value={formData.regdNo}
                                    onChange={handleChange}
                                    placeholder="Enter registration number"
                                />
                            </div>

                        </div>
                    </section>


                    {/* DATES */}

                    <section className="form-section">
                        <h2>Report Dates</h2>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Specimen Received On</label>

                                <input
                                    type="date"
                                    name="specimenReceivedDate"
                                    value={formData.specimenReceivedDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Date of Reporting</label>

                                <input
                                    type="date"
                                    name="reportingDate"
                                    value={formData.reportingDate}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                    </section>


                    {/* SPECIMEN */}

                    <section className="form-section">
                        <h2>Specimen Details</h2>

                        <div className="form-group">
                            <label>Nature of Specimen</label>

                            <textarea
                                name="natureOfSpecimen"
                                value={formData.natureOfSpecimen}
                                onChange={handleChange}
                                rows="3"
                            />
                        </div>
                    </section>


                    {/* GROSS EXAMINATION */}

                    <section className="form-section">

                        <div className="form-group">
                            <label>Gross Examination</label>

                            <textarea
                                name="grossExamination"
                                value={formData.grossExamination}
                                onChange={handleChange}
                                rows="8"
                            />
                        </div>

                    </section>


                    {/* MICROSCOPIC EXAMINATION */}

                    <section className="form-section">

                        <div className="form-group">
                            <label>Microscopic Examination</label>

                            <textarea
                                name="microscopicExamination"
                                value={formData.microscopicExamination}
                                onChange={handleChange}
                                rows="10"
                            />
                        </div>

                    </section>


                    {/* IMPRESSION */}

                    <section className="form-section">

                        <div className="form-group">
                            <label>Impression</label>

                            <textarea
                                name="impression"
                                value={formData.impression}
                                onChange={handleChange}
                                rows="6"
                            />
                        </div>

                    </section>

                    <div className="form-section">

                        <h2>Doctor / Signatory Details</h2>

                        <div className="doctor-grid">

                            {/* DOCTOR 1 */}
                            <div className="doctor-card">

                                <h3>Doctor 1</h3>

                                <label>Doctor Name</label>

                                <select
                                    value={formData.doctor1Id}
                                    onChange={(e) =>
                                        handleDoctorChange(1, e.target.value)
                                    }
                                >
                                    <option value="">Select Doctor</option>

                                    {DOCTORS.map((doctor) => (
                                        <option
                                            key={doctor.id}
                                            value={doctor.id}
                                        >
                                            {doctor.name}
                                        </option>
                                    ))}
                                </select>

                                <label>Designation</label>

                                <select
                                    name="doctor1Designation"
                                    value={formData.doctor1Designation}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Asst. Professor">
                                        Asst. Professor
                                    </option>
                                    <option value="Asso. Professor">
                                        Asso. Professor
                                    </option>
                                    <option value="Professor">
                                        Professor
                                    </option>
                                    <option value="Senior Resident">
                                        Senior Resident
                                    </option>
                                </select>

                            </div>


                            {/* DOCTOR 2 */}
                            <div className="doctor-card">

                                <h3>Doctor 2</h3>

                                <label>Doctor Name</label>

                                <select
                                    value={formData.doctor2Id}
                                    onChange={(e) =>
                                        handleDoctorChange(2, e.target.value)
                                    }
                                >
                                    <option value="">Select Doctor</option>

                                    {DOCTORS.map((doctor) => (
                                        <option
                                            key={doctor.id}
                                            value={doctor.id}
                                        >
                                            {doctor.name}
                                        </option>
                                    ))}
                                </select>

                                <label>Designation</label>

                                <select
                                    name="doctor2Designation"
                                    value={formData.doctor2Designation}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Asst. Professor">
                                        Asst. Professor
                                    </option>
                                    <option value="Asso. Professor">
                                        Asso. Professor
                                    </option>
                                    <option value="Professor">
                                        Professor
                                    </option>
                                    <option value="Senior Resident">
                                        Senior Resident
                                    </option>
                                </select>

                            </div>


                            {/* DOCTOR 3 */}
                            <div className="doctor-card">

                                <h3>Doctor 3</h3>

                                <label>Doctor Name</label>

                                <select
                                    value={formData.doctor3Id}
                                    onChange={(e) =>
                                        handleDoctorChange(3, e.target.value)
                                    }
                                >
                                    <option value="">Select Doctor</option>

                                    {DOCTORS.map((doctor) => (
                                        <option
                                            key={doctor.id}
                                            value={doctor.id}
                                        >
                                            {doctor.name}
                                        </option>
                                    ))}
                                </select>

                                <label>Designation</label>

                                <select
                                    name="doctor3Designation"
                                    value={formData.doctor3Designation}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Asst. Professor">
                                        Asst. Professor
                                    </option>
                                    <option value="Asso. Professor">
                                        Asso. Professor
                                    </option>
                                    <option value="Professor">
                                        Professor
                                    </option>
                                    <option value="Senior Resident">
                                        Senior Resident
                                    </option>
                                </select>

                            </div>

                        </div>

                    </div>


                    {/* BUTTONS */}

                    <div className="button-container">

                        <button
                            type="button"
                            className="reset-button"
                            onClick={handleReset}
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            className="generate-button"
                        >
                            Generate Report
                        </button>

                    </div>

                </form>

{showPreview && (
    <section className="preview-section">

        <h2>Report Preview</h2>

        <div className="report-preview">

            <h3>HISTOPATHOLOGY REPORT</h3>

            <div className="patient-details">

                <p>
                    <strong>Name of Patient:</strong>{" "}
                    {formData.patientName}
                </p>

                <p>
                    <strong>Age / Sex:</strong>{" "}
                    {formData.age} / {formData.sex}
                </p>

                <p>
                    <strong>Histo. No.:</strong>{" "}
                    {formData.histoNo}
                </p>

                <p>
                    <strong>OPD / IPD:</strong>{" "}
                    {formData.opdIpd}
                </p>

                <p>
                    <strong>Ward / Unit:</strong>{" "}
                    {formData.wardUnit}
                </p>

                <p>
                    <strong>Regd. No.:</strong>{" "}
                    {formData.regdNo}
                </p>

                <p>
                    <strong>Specimen received on:</strong>{" "}
                    {formData.specimenReceivedDate}
                </p>

                <p>
                    <strong>Date of reporting:</strong>{" "}
                    {formData.reportingDate}
                </p>

            </div>

            <hr />

            <h4>Nature of specimen</h4>
            <p>{formData.natureOfSpecimen}</p>

            <h4>Gross examination</h4>
            <p className="preserve-format">
                {formData.grossExamination}
            </p>

            <h4>Microscopic examination</h4>
            <p className="preserve-format">
                {formData.microscopicExamination}
            </p>

            <h4>IMPRESSION</h4>
            <p className="preserve-format">
                {formData.impression}
            </p>

            <div className="signature-section">

                  <div className="signature-box">
                    <strong>{formData.doctor1Name}</strong>
                    <span>{formData.doctor1Designation}</span>
                  </div>

                  <div className="signature-box">
                    <strong>{formData.doctor2Name}</strong>
                    <span>{formData.doctor2Designation}</span>
                  </div>

                  <div className="signature-box">
                    <strong>{formData.doctor3Name}</strong>
                    <span>{formData.doctor3Designation}</span>
                  </div>

              </div>

        </div>

          <button
                type="button"
                className="generate-button"
                onClick={async () => {
                  try {
                    await generateReport(formData);
                  } catch (error) {
                    console.error(error);
                    alert("Failed to generate report");
                  }
                }}
        >
          Generate Word Document
        </button>

    </section>
)}

</main>

        </div>
    );
}

export default App;