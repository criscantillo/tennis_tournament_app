const tournamentService = require('../../api_services/tournamentService');
const statusCodes = require('http-status-codes').StatusCodes;
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const listTournaments = await tournamentService.getListTournaments();
        return NextResponse.json(listTournaments, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al obtener los torneos'}, 
            {status:statusCodes.NOT_FOUND }
        );
    }
}

export async function POST(req) {
    const tournamentData = await req.json();

    try{
        const tournamentDB = await tournamentService.saveTournament(tournamentData);
        return NextResponse.json(tournamentDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al insertar torneo'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}

export async function PUT(req) {
    const tournamentData = await req.json();

    try{
        const tournamentDB = await tournamentService.updateTournament(tournamentData);
        return NextResponse.json(tournamentDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al actualizar torneo'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}

export async function DELETE(req, res) {
    console.log(req);
    const id = req.query.id;

    try{
        const tournamentDB = await tournamentService.deleteTournament(id);
        return NextResponse.json(tournamentDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al eliminar torneo'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}