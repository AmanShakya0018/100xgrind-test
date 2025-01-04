import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Inbox } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <section className='flex flex-col items-center justify-center h-screen max-w-4xl mx-auto p-4'>
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
          <CardTitle className="text-2xl font-bold text-center">No Projects Yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            There are no projects to display at the moment. Check back later or create a new project to get started.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default page