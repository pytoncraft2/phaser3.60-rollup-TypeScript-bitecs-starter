import * as Phaser from 'phaser'
import {
	defineSystem,
	defineQuery,
	enterQuery,
	exitQuery
} from 'bitecs'

import Position from '../components/Position'
import Sprite from '../components/Sprite'
import Rotation from '../components/Rotation'
import Velocity from '../components/Velocity'
import ArcadeSprite from '../components/ArcadeSprite'

export const createArcadeSpriteSystem = (group: Phaser.Physics.Arcade.Group, textures: string[]) => {
	const spritesById = new Map<number, Phaser.Physics.Arcade.Sprite>()

	const spriteQuery = defineQuery([Position, Rotation, Velocity, ArcadeSprite])
	
	const spriteQueryEnter = enterQuery(spriteQuery)
	const spriteQueryExit = exitQuery(spriteQuery)

	return defineSystem((world) => {
		const entitiesEntered = spriteQueryEnter(world)
		for (let i = 0; i < entitiesEntered.length; ++i)
		{
			const id = entitiesEntered[i]
			const texId = Sprite.texture[id]
			const texture = textures[texId]

			const sprite = group.get(Position.x[id], Position.y[id], texture)
			
			spritesById.set(id, sprite)
		}

		const entities = spriteQuery(world)
		for (let i = 0; i < entities.length; ++i)
		{
			const id = entities[i]

			const sprite = spritesById.get(id)
			if (!sprite)
			{
				// log an error
				continue
			}

			sprite.setVelocity(Velocity.x[id], Velocity.y[id])
			sprite.angle = Rotation.angle[id]
		}

		const entitiesExited = spriteQueryExit(world)
		for (let i = 0; i < entitiesExited.length; ++i)
		{
			const id = entitiesEntered[i]
			const sprite = spritesById.get(id)

			if (!sprite) continue;

			group.killAndHide(sprite)
			spritesById.delete(id)
		}

		return world
	})
}

export default function createSpriteSystem(group: Phaser.Physics.Arcade.Group, textures: string[]) {
	const spritesById = new Map<number, Phaser.Physics.Arcade.Sprite>()

	const spriteQuery = defineQuery([Position, Rotation, Velocity, ArcadeSprite])
	
	const spriteQueryEnter = enterQuery(spriteQuery)
	const spriteQueryExit = exitQuery(spriteQuery)

	return defineSystem((world) => {
		const entitiesEntered = spriteQueryEnter(world)
		for (let i = 0; i < entitiesEntered.length; ++i)
		{
			const id = entitiesEntered[i]
			const texId = Sprite.texture[id]
			const texture = textures[texId]

			const sprite = group.get(Position.x[id], Position.y[id], texture)
			
			spritesById.set(id, sprite)
		}

		const entities = spriteQuery(world)
		for (let i = 0; i < entities.length; ++i)
		{
			const id = entities[i]

			const sprite = spritesById.get(id)
			if (!sprite)
			{
				// log an error
				continue
			}

			sprite.setVelocity(Velocity.x[id], Velocity.y[id])
			sprite.angle = Rotation.angle[id]
		}

		const entitiesExited = spriteQueryExit(world)
		for (let i = 0; i < entitiesExited.length; ++i)
		{
			const id = entitiesEntered[i]
			const sprite = spritesById.get(id)

			if (!sprite) continue;

			group.killAndHide(sprite)
			spritesById.delete(id)
		}

		return world
	})
}
