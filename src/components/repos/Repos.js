import { repos } from './RepoInfo';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Github, Braces } from 'lucide-react';
import Link from 'next/link';

export default function Repos() {
    return (
        <div className="flex flex-col items-center justify-center mx-4 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6">
                {repos.map((repo, index) => (
                    <Repo key={index} repo={repo} />
                ))}
            </div>
        </div>
    )
}

function Repo( { repo }) {
    return (
        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
                <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
                { repo.framework !== null ? 
                    <div className="flex items-center space-x-2 mb-4">
                        <Braces className="h-4 w-4" />
                        <span className="text-primary/70">{repo.framework}</span>
                    </div>
                : null }
                <Link href={repo.url} target="_blank" className="flex items-center space-x-2 hover:underline">
                    <Github className="h-4 w-4" />
                    <span className="text-primary/70">View on GitHub</span>
                </Link>
            </CardContent>
            <CardFooter>
                { repo.content }
            </CardFooter>
        </Card>
    )
}