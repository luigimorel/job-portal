package models

import "gorm.io/gorm"

type Job struct {
	gorm.Model
	Id                  uint64 `gorm:"primary_key;auto_increment" json:"id"`
	Title               string `gorm:"size:255;not null;" json:"title"`
	Logo                string `gorm:"size:255;not null;" json:"logo"`
	Company             string `gorm:"size:255;not null;" json:"company"`
	City                string `gorm:"size:255;" json:"city"`
	ApplicationLink     string `gorm:"size:255;" json:"application_link"`
	Continent           string `gorm:"size:255;" json:"continent"`
	ContactEmail        string `gorm:"size:255;" json:"contact_email"`
	CompanyWebsite      string `gorm:"size:255;not null;" json:"company_website"`
	Country             string `gorm:"size:255;" json:"country"`
	Type                string `gorm:"size:255;not null;" json:"job_type"`
	Duration            string `gorm:"size:255;not null;" json:"duration"`
	Industry            string `gorm:"size:255;not null;" json:"industry"`
	JobDescription      string `gorm:"type:text" json:"jobdescription"`
	ApprovalStatus      bool   `gorm:"type:bool;default:false;" json:"approvalstatus"`
	LocationOfWorkPlace string `gorm:"size:255;not null;" json:"location_of_work_place"`
}
