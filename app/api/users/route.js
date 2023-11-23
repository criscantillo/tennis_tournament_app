const userService = require('../../api_services/userService');
const statusCodes = require('http-status-codes').StatusCodes;
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const listUsers = await userService.getListUser();
        return NextResponse.json(listUsers, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al obtener los usuarios'}, 
            {status:statusCodes.NOT_FOUND }
        );
    }
}

export async function POST(req) {
    const userData = await req.json();

    try{
        const userDB = await userService.saveUser(userData);
        return NextResponse.json(userDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al insertar usuario'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}

export async function PUT(req) {
    const userData = await req.json();

    try{
        const userDB = await userService.updateUser(userData);
        return NextResponse.json(userDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al actualizar usuario'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}