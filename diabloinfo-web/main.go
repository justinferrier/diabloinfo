package main

import (
	"diablo/diablo-web/utils"
	"net/http"
	"team/team-web/routes"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	utils.Seed()
	e := echo.New()
	e.Use(middleware.Recover())

	e.Use(middleware.CORS())
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Diablo Stats!")
	})

	routes.SetRoutes(e)

	e.Logger.Fatal(e.Start(":8080"))
}
