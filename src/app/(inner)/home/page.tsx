import { Search, FileText, Key, Link2, Home, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";

export default function HomePage() {
    return (
        <div className="flex flex-col h-full p-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                <h1 className="text-2xl text-white font-semibold">Organisation</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Input 
                    placeholder="Suche nach..."
                    className="bg-white/10 border-none text-white pl-4 pr-12"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-8">
                <button className="flex flex-col items-center justify-center p-4 bg-blue-600 rounded-lg">
                    <FileText className="w-6 h-6 text-white mb-2" />
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-blue-600 rounded-lg">
                    <Key className="w-6 h-6 text-white mb-2" />
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-blue-600 rounded-lg">
                    <Link2 className="w-6 h-6 text-white mb-2" />
                </button>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-sm">Zuletzt Bearbeitet:</h2>
                
                {/* Content Card */}
                <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">Titel</h3>
                        <span className="text-sm text-gray-400">26.10.2024</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                        Ersten Paar Zeilen Inhalt. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...
                    </p>
                    <p className="text-sm text-gray-400">
                        Mitarbeitende: Julian Damm, David Sayk, +3 Weitere
                    </p>
                </div>

                {/* Second Card (with key icon) */}
                <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                        <h3 className="text-white font-medium">Titel</h3>
                        <div className="flex gap-2">
                            <span className="text-sm text-gray-400">26.10.2024</span>
                            <Key className="w-5 h-5 text-blue-500" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
