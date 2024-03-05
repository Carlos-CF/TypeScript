import { Router, Request, Response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response)=> {
   //throw new Error('Erro ao fazer requisção');
   return res.json({nome: 'Carlos'})
})

/*
router.get('/teste', (req: Request, res: Response)=> {
    return res.json({nome: 'Carlos'});
})*/

export {router};