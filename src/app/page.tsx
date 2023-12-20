"use client";

import { useGetAllTodosQuery } from "@/store/query/todoQuery";

export default function Home() {

    const { data, isError, isLoading } = useGetAllTodosQuery("some-data");

    console.log("Data: ", { data, isError, isLoading });


    return (
        <>
            <h1>Home</h1>
        </>
    )
}
