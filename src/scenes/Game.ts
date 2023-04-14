import * as Phaser from 'phaser'
import {
	createWorld,
	addEntity,
	addComponent,
} from 'bitecs'

import type {
	IWorld,
	System
} from 'bitecs'

import Position from '../components/Position'
import Velocity from '../components/Velocity'
import Sprite from '../components/Sprite'
import Rotation from '../components/Rotation'
import Player from '../components/Player'
import CPU from '../components/CPU'
import Input from '../components/Input'

import createMovementSystem from '../systems/movement'
import createPlayerSystem from '../systems/player'
import createCPUSystem from '../systems/cpu'
import { createArcadeSpriteStaticSystem, createArcadeSpriteSystem } from '../systems/sprite'
import { ArcadeSprite, ArcadeSpriteStatic } from '../components/ArcadeSprite'
import Alpha from '../components/Alpha'

enum Textures
{
	TankBlue = 0,
	// TankGreen = 1,
	// TankRed = 2,
	Toile = 1
}

const TextureKeys = [
	'tank-blue',
	// 'tank-green',
	// 'tank-green',
	'toile'
]

export default class Game extends Phaser.Scene
{
	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys

	private world!: IWorld
	private playerSystem!: System
	private cpuSystem!: System
	private movementSystem!: System
	private spriteSystem!: System
	private spriteStaticSystem!: System

	constructor()
	{
		super('game')
	}

	init()
	{
		this.cursors = this.input.keyboard.createCursorKeys()
	}

	preload()
    {
        this.load.image(TextureKeys[Textures.TankBlue], 'assets/tank_blue.png')
		// this.load.image(TextureKeys[Textures.TankGreen], 'assets/tank_green.png')
		// this.load.image(TextureKeys[Textures.TankRed], 'assets/tank_red.png')
		this.load.image(TextureKeys[Textures.Toile], 'assets/toile.png')
    }

    create()
    {
		const { width, height } = this.scale

        this.world = createWorld()

		// create the player tank
		const blueTank = addEntity(this.world)
		const compList = [
			Position,
			Velocity,
			Rotation,
			Alpha,
			Sprite,
			Player,
			Input,
			ArcadeSprite
		]

		compList.forEach(comp => {
			addComponent(this.world, comp, blueTank)
		})

		Position.x[blueTank] = Phaser.Math.Between(10, 400)
		Position.y[blueTank] = 100
		Sprite.texture[blueTank] = Textures.TankBlue
		Input.speed[blueTank] = 10
		Alpha.alpha[blueTank] = 1


		const toile = addEntity(this.world)
		addComponent(this.world, Position, toile)
		addComponent(this.world, ArcadeSpriteStatic, toile)
		ArcadeSpriteStatic.texture[toile] = Textures.Toile
		Position.x[toile] = 400
		Position.y[toile] = 300

		// create random cpu tanks
		// for (let i = 0; i < 10; ++i)
		// {
		// 	const tank = addEntity(this.world)

		// 	addComponent(this.world, Position, tank)
		// 	Position.x[tank] = Phaser.Math.Between(width * 0.25, width * 0.75)
		// 	Position.y[tank] = Phaser.Math.Between(height * 0.25, height * 0.75)

		// 	addComponent(this.world, Velocity, tank)
		// 	addComponent(this.world, Rotation, tank)
			
		// 	addComponent(this.world, Sprite, tank)
		// 	Sprite.texture[tank] = Phaser.Math.Between(1, 2)

		// 	addComponent(this.world, CPU, tank)
		// 	CPU.timeBetweenActions[tank] = Phaser.Math.Between(0, 500)

		// 	addComponent(this.world, Input, tank)
		// 	Input.speed[tank] = 10
		// }

		const spriteGroup = this.physics.add.group()
		const spriteStaticGroup = this.physics.add.staticGroup()

		// create the systems
		this.spriteSystem = createArcadeSpriteSystem(spriteGroup, ['tank-blue', 'tank-green', 'tank-red'])
		this.spriteStaticSystem = createArcadeSpriteStaticSystem(spriteStaticGroup, TextureKeys)
		this.playerSystem = createPlayerSystem(this.cursors)
		this.cpuSystem = createCPUSystem(this)
		this.movementSystem = createMovementSystem()
    }

	update(t: number, dt: number) {
		// run each system in desired order
		this.playerSystem(this.world)
		this.cpuSystem(this.world)

		this.movementSystem(this.world)

		this.spriteStaticSystem?.(this.world)
		this.spriteSystem?.(this.world)
	}
}
