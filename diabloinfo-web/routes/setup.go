package routes

import "github.com/labstack/echo"

func SetRoutes(e *echo.Echo) {
	u := User{}
	s := Site{}
	sys := System{}

	u.SetRoutes(e)
	s.SetRoutes(e)
	sys.SetRoutes(e)
}
