package routes

import "github.com/labstack/echo"

type Site struct {
}

func (s *Site) SetRoutes(e *echo.Echo) {
	e.Group("/site")
}
