const tournamentService = require('../../../api_services/tournamentService');
const statusCodes = require('http-status-codes').StatusCodes;
import { NextResponse } from "next/server";

export async function GET(req, context) {
    const {params} = context;

    try{
        const tournaments = await tournamentService.getTournament(params.id);
        return NextResponse.json(tournaments, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al obtener el torneo'}, 
            {status:statusCodes.NOT_FOUND }
        );
    }
}

export async function DELETE(req, context) {
    const {params} = context;

    try{
        const tournamentDB = await tournamentService.deleteTournament(params.id);
        return NextResponse.json(tournamentDB, {status:statusCodes.OK });
    }catch(err){
        console.error(err);
        return NextResponse.json(
            {error: 'error al eliminar torneo'}, 
            {status:statusCodes.CONFLICT }
        );
    }
}