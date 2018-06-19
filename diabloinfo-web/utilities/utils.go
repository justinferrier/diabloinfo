package utils

import (
	"math/rand"
	"time"
)

func Seed() {
	rand.Seed(time.Now().Unix())
}
