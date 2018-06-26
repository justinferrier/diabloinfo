package routes

import "github.com/labstack/echo"

type User struct {
}

func (u *User) SetRoutes(e *echo.Echo) {
	e.Group("/user")
}
