package routes

import "github.com/labstack/echo"

type System struct {
}

func (s *System) SetRoutes(e *echo.Echo) {
	e.Group("/system")
}
