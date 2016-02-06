package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Static("/", "public") // Echo.Static(path, root string)
	e.Run(":3500")
}
