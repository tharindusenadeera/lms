import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/dashboard/companionCard";
import RecentlyCompletedTable from "@/components/dashboard/recentlyCompletedTable";
import ActionCard from "@/components/dashboard/actionCard";

const Page = () => {
  return (
    <main>
        <h1 className="text-2xl"> Dashboard</h1>
        <section className="home-section">
            <CompanionCard />
            <CompanionCard />
            <CompanionCard />
        </section>
        <section className="home-section">
            <RecentlyCompletedTable />
            <ActionCard />
        </section>

    </main>
  )
}

export default Page