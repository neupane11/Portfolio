//import React from 'react'
import react from "./assets/img/react.png";
import github from "./assets/img/github.png";
import python from "./assets/img/python.png"
import cplus from "./assets/img/cplus.png";
import java from "./assets/img/java.png"
import mongodb from "./assets/img/mongodb.png"
import nodejs from "./assets/img/nodejs.png"
export const particlesOptions = {
	"particles": {
		"number": {
			"value": 8,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"line_linked": {
			"enable": false
		},
		"move": {
			"speed": 1,
			"out_mode": "out"
		},
		"shape": {
			"type": [
				"image",
				"circle"
			],
			"image": [
				{
					'src':github,
					"height": 20,
					"width": 23
				},
				{
					'src':python,
					"height": 20,
					"width": 20
				},
				{
					'src':react,
					"height": 20,
					"width": 20
				},
				{
					'src':cplus,
					"height": 20,
					"width": 20
				},
				{
					'src':java,
					"height": 20,
					"width": 20
				},
				{
					'src':mongodb,
					"height": 20,
					"width": 20
				},
				{
					'src':nodejs,
					"height": 20,
					"width": 20
				}
			]
		},
		"color": {
			"value": "#CCC"
		},
		"size": {
			"value": 30,
			"random": false,
			"anim": {
				"enable": true,
				"speed": 4,
				"size_min": 10,
				"sync": false
			}
		}
	},
	"retina_detect": false
  };