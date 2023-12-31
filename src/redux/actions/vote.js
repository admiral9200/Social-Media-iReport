import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveVote = createAsyncThunk(
    'vote/saveVote',
    async (params) => {
        try {
            console.log("params: ", params)
            const res = await axios.post("https://i-report-backend-admiral.onrender.com//vote/saveVote", { ...params });
            return res.data;
        } catch(err) {
            throw err;
        }
    }
)

export const getVotes = createAsyncThunk(
    'vote/getVotes',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com//vote/getVotes");
            return res.data
        } catch (err) {
            throw err
        }
    }
)

export const getTotalVotes = createAsyncThunk(
    'vote/getTotalVotes',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com//vote/getTotalVotes");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)

export const getVotePercents = createAsyncThunk(
    'vote/getVotePercents',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com//vote/getVotePercents");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)

export const getVotersNumber = createAsyncThunk(
    'vote/getVotersNumber',
    async () => {
        try {
            const res = await axios.get("https://i-report-backend-admiral.onrender.com//vote/getVotersNumber");
            return res.data
        } catch (err) {
            throw err;
        }
    }
)