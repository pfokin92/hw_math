﻿export default class Character {
    constructor(name, type, health=100){
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = 1;
        this.attack = null;
        this.defence = null;
        if(this.name.length>10||this.name.length<2){
            throw new Error('Неверное имя');
        }
        const typesArr = ['Bowman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'];
        if(!(typesArr.includes(this.type))){
            throw new Error('Неверный тип');
        }
    }
}