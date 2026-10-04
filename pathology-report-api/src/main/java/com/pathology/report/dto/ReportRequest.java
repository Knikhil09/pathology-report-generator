package com.pathology.report.dto;

public class ReportRequest {

    private String patientName;
    private String age;
    private String sex;
    private String histoNo;
    private String opdIpd;
    private String wardUnit;
    private String regdNo;
    private String specimenReceivedDate;
    private String reportingDate;
    private String natureOfSpecimen;
    private String grossExamination;
    private String microscopicExamination;
    private String impression;
    
 // Doctor 1
    private String doctor1Name;
    private String doctor1Designation;

    // Doctor 2
    private String doctor2Name;
    private String doctor2Designation;

    // Doctor 3
    private String doctor3Name;
    private String doctor3Designation;

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getHistoNo() {
        return histoNo;
    }

    public void setHistoNo(String histoNo) {
        this.histoNo = histoNo;
    }

    public String getOpdIpd() {
        return opdIpd;
    }

    public void setOpdIpd(String opdIpd) {
        this.opdIpd = opdIpd;
    }

    public String getWardUnit() {
        return wardUnit;
    }

    public void setWardUnit(String wardUnit) {
        this.wardUnit = wardUnit;
    }

    public String getRegdNo() {
        return regdNo;
    }

    public void setRegdNo(String regdNo) {
        this.regdNo = regdNo;
    }

    public String getSpecimenReceivedDate() {
        return specimenReceivedDate;
    }

    public void setSpecimenReceivedDate(String specimenReceivedDate) {
        this.specimenReceivedDate = specimenReceivedDate;
    }

    public String getReportingDate() {
        return reportingDate;
    }

    public void setReportingDate(String reportingDate) {
        this.reportingDate = reportingDate;
    }

    public String getNatureOfSpecimen() {
        return natureOfSpecimen;
    }

    public void setNatureOfSpecimen(String natureOfSpecimen) {
        this.natureOfSpecimen = natureOfSpecimen;
    }

    public String getGrossExamination() {
        return grossExamination;
    }

    public void setGrossExamination(String grossExamination) {
        this.grossExamination = grossExamination;
    }

    public String getMicroscopicExamination() {
        return microscopicExamination;
    }

    public void setMicroscopicExamination(String microscopicExamination) {
        this.microscopicExamination = microscopicExamination;
    }

    public String getImpression() {
        return impression;
    }

    public void setImpression(String impression) {
        this.impression = impression;
    }

	public String getDoctor1Name() {
		return doctor1Name;
	}

	public void setDoctor1Name(String doctor1Name) {
		this.doctor1Name = doctor1Name;
	}

	public String getDoctor1Designation() {
		return doctor1Designation;
	}

	public void setDoctor1Designation(String doctor1Designation) {
		this.doctor1Designation = doctor1Designation;
	}

	public String getDoctor2Name() {
		return doctor2Name;
	}

	public void setDoctor2Name(String doctor2Name) {
		this.doctor2Name = doctor2Name;
	}

	public String getDoctor2Designation() {
		return doctor2Designation;
	}

	public void setDoctor2Designation(String doctor2Designation) {
		this.doctor2Designation = doctor2Designation;
	}

	public String getDoctor3Name() {
		return doctor3Name;
	}

	public void setDoctor3Name(String doctor3Name) {
		this.doctor3Name = doctor3Name;
	}

	public String getDoctor3Designation() {
		return doctor3Designation;
	}

	public void setDoctor3Designation(String doctor3Designation) {
		this.doctor3Designation = doctor3Designation;
	}
    
    
}