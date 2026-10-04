package com.pathology.report.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

	@RestController
	@CrossOrigin(origins = "http://127.0.0.1:5173")
	public class HealthController {
		
		
		@GetMapping("/api/health")
		public String health() {
			
			return "Pathology report api is running";
			
		}
	}

	
