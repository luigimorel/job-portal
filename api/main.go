package main

import (
	"github.com/morelmiles/job-portal/config"
	"github.com/morelmiles/job-portal/routes"
)

func main() {
	config.Config()
	routes.Routes()
}
