package routes

import (
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/morelmiles/job-portal/controllers"
	"github.com/rs/cors"
)

func Routes() {
	port := os.Getenv("PORT")

	router := mux.NewRouter()
	corsHandler := cors.Default().Handler(router)

	router.HandleFunc("/", controllers.Home).Methods("GET")

	// Jobs
	router.HandleFunc("/api/v1/jobs", controllers.GetJobs).Methods("GET")
	router.HandleFunc("/api/v1/jobs/{id}", controllers.GetJobById).Methods("GET")
	router.HandleFunc("/api/v1/create", controllers.CreateJob).Methods("POST")
	router.HandleFunc("/api/v1/jobs/{id}", controllers.DeleteJobById).Methods("DELETE")
	router.HandleFunc("/api/v1/jobs/{id}", controllers.UpdateJobById).Methods("PUT")
	http.ListenAndServe(":"+port, corsHandler)
}
