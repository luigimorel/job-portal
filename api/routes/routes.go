package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/morelmiles/startupjobs/controllers"
	"github.com/rs/cors"
)

func Routes() {

	router := mux.NewRouter()
	corsHandler := cors.Default().Handler(router)

	router.HandleFunc("/", controllers.Home).Methods("GET")

	// Jobs
	router.HandleFunc("/api/v1/jobs", controllers.GetJobs).Methods("GET")
	router.HandleFunc("/api/v1/job/{id}", controllers.GetJobById).Methods("GET")
	router.HandleFunc("/api/v1/create", controllers.CreateJob).Methods("POST")
	router.HandleFunc("/api/v1/job/{id}", controllers.DeleteJobById).Methods("DELETE")
	router.HandleFunc("/api/v1/job/{id}", controllers.UpdateJobById).Methods("PUT")
	http.ListenAndServe(":8080", corsHandler)
}
