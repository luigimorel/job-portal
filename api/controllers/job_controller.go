package controllers

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/morelmiles/job-portal/config"
	"github.com/morelmiles/job-portal/models"
)

// GetJobs fetches all the jobs in the database
func GetJobs(w http.ResponseWriter, r *http.Request) {

	var jobs []models.Job

	limitStr := r.URL.Query().Get("limit")
	pageStr := r.URL.Query().Get("page")

	// Set default values if limit or page is not provided
	limit := 10
	page := 1
	if limitStr != "" {
		limit, _ = strconv.Atoi(limitStr)
	}
	if pageStr != "" {
		page, _ = strconv.Atoi(pageStr)
	}

	offset := (page - 1) * limit

	config.DB.Limit(limit).Offset(offset).Find(&jobs).Order("DESC")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(&jobs)
}

func GetJobById(w http.ResponseWriter, r *http.Request) {
	jobId := mux.Vars(r)["id"]
	if !checkIfJobExists(jobId) {
		json.NewEncoder(w).Encode("job not found!")
		return
	}
	var job models.Job
	config.DB.First(&job, jobId)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(job)
}

func checkIfJobExists(jobId string) bool {
	var job models.Job
	config.DB.First(&job, jobId)

	return job.Id != 0
}

func CreateJob(w http.ResponseWriter, r *http.Request) {
	var job models.Job
	var err error

	json.NewDecoder(r.Body).Decode(&job)

	config.DB.Create(&job)

	if err != nil {
		log.Panic(err)
	} else {
		json.NewEncoder(w).Encode(&job)
	}
}

func UpdateJobById(w http.ResponseWriter, r *http.Request) {
	jobId := mux.Vars(r)["id"]
	if !checkIfJobExists(jobId) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode("job not found!")
		return
	}

	var job models.Job

	config.DB.First(&job, jobId)
	json.NewDecoder(r.Body).Decode(&job)
	config.DB.Save(&job)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(job)
}

func DeleteJobById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	jobId := mux.Vars(r)["id"]

	if !checkIfJobExists(jobId) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode("job not found!")
		return
	}

	var job models.Job
	config.DB.Delete(&job, jobId)
	json.NewEncoder(w).Encode(job)
}
