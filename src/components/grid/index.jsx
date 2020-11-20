import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast, ToastContainer } from 'react-toastify';

import {format, parseISO} from 'date-fns' 

import { getEsportes } from '../../service/oddService'
import './style.css'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

const Grid = ({ filters }) => {
    const classes = useStyles();
    const names = ['Arb\'s percent', 'Sport', 'Age', 'BookMarker', 'Beginning Time', 'Event', 'Market', 'Quota']

    const [esportes, setEsportes] = useState([])
    const [opportunities, setOpportunities] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadEsportes() {
            try {
                setLoading(true)
                const response = await getEsportes(filters.map(f => f.code))
                setEsportes(response.esportes)
                setOpportunities(response.quantidade_odds)
            } catch (err) {
                toast.error("Error in loading sports list")
            } finally {
                setLoading(false)
            }
        }
        loadEsportes();
    }, [filters])

    const getMatches = () => {
        if (esportes.length === 0)
            return 0
        const totalMatches = esportes.map(e => e.jogos.length).reduce((a, b) => a + b)
        return totalMatches
    }

    const formatDate = (date) =>{
        const parsed = parseISO(date.split('.').reverse().join('-'));
        return format(parsed, "dd MMM")
    }

    return (
        <div className="grid-container">
            {
                !loading
                    ?
                    <div className="top-info">
                        <span className="opportunities">Opportunities: <span className="value">{opportunities}</span></span>
                        <span className="matches">Matches: <span className="value">{getMatches()}</span></span>
                    </div>
                    : null}
            <TableContainer className="table-wrapper" component={Paper}>
                <ToastContainer />
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className="grid-header">
                        <TableRow>
                            {names.map((name, index) => <TableCell key={index}>{name}</TableCell>)}
                        </TableRow>
                    </TableHead>

                    <TableBody className="grid-body">
                        {loading ?
                            <TableRow>
                                <TableCell colSpan={names.length}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <CircularProgress style={{ color: '#04D361' }} />
                                    </div>
                                </TableCell>
                            </TableRow>
                            : esportes.map((esporte) => (
                                esporte.jogos.map(jogo => (
                                    jogo.odds[0].odds.map(({ odd_a, odd_b }, index) => (
                                        <TableRow key={index} className="grid-row">
                                            <TableCell className="grid-row__percent" >
                                                {odd_a.porcentagem.toFixed(2)} %
                                            </TableCell>
                                            <TableCell className="grid-row__sport">
                                                {esporte.name}
                                            </TableCell>
                                            <TableCell className="grid-row__age">
                                                14h
                                            </TableCell>
                                            <TableCell className="odd grid-row__bookmark">
                                                <div className="odd-a">
                                                    {odd_a.name_bookmaker}
                                                </div>
                                                <hr />
                                                <div className="odd-b">
                                                    {odd_b.name_bookmaker}
                                                </div>
                                            </TableCell>
                                            <TableCell className="odd grid-row__beginning-time">
                                                <div className="odd-a">
                                                    <span className="date">{formatDate(jogo.date)}</span>
                                                    <span className="time">{jogo.time}</span>
                                                </div>
                                                <hr />
                                                <div className="odd-b">
                                                    <span className="date">{formatDate(jogo.date)}</span>
                                                    <span className="time">{jogo.time}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="odd grid-row__event">
                                                <div className="odd-a">
                                                    <span className="title">event title</span>
                                                    <span className="subtitle">event subtitle</span>
                                                </div>
                                                <hr />
                                                <div className="odd-b">
                                                    <span className="title">event title</span>
                                                    <span className="subtitle">event subtitle</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="odd grid-row__market">
                                                <div className="odd-a">
                                                    {odd_a.type} 1
                                                </div>
                                                <hr />
                                                <div className="odd-b">
                                                    {odd_b.type} 2
                                                </div>
                                            </TableCell>
                                            <TableCell className="odd grid-row__quota">
                                                <div className="odd-b">
                                                    {odd_a.value}
                                                </div>
                                                <hr />
                                                <div className="odd-b">
                                                {odd_a.value}
                                                </div>
                                            </TableCell>
                                            <TableCell className="odd grid-row__last"/>
                                        </TableRow>
                                    ))
                                ))
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Grid;
