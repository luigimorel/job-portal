package main

import (
	"github.com/morelmiles/startupjobs/config"
	"github.com/morelmiles/startupjobs/routes"
)

func main() {
	config.Config()
	routes.Routes()
}
