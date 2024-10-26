import { Search, Home, Plus, Edit2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AccountPage() {
    return (
        <div className="flex flex-col h-full p-4">
            {/* Header */}
            <h1 className="text-2xl text-white font-bold mb-8">ACCOUNT DETAILS</h1>

            {/* Account Details Card */}
            <div className="bg-white/10 rounded-lg p-6 mb-6">
                {/* Name Field */}
                <div className="mb-4">
                    <label className="text-sm text-gray-300 mb-1 block">Name</label>
                    <div className="flex items-center justify-between bg-white/5 rounded-md p-3">
                        <span className="text-white">Alexander Herrmann</span>
                        <Edit2 className="w-4 h-4 text-blue-500" />
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="text-sm text-gray-300 mb-1 block">E-Mail</label>
                    <div className="flex items-center justify-between bg-white/5 rounded-md p-3">
                        <span className="text-white">a.herrmann@gmail.com</span>
                        <Edit2 className="w-4 h-4 text-blue-500" />
                    </div>
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                    <label className="text-sm text-gray-300 mb-1 block">Telefonnummer</label>
                    <div className="flex items-center justify-between bg-white/5 rounded-md p-3">
                        <span className="text-white">+49 (0) 123456789</span>
                        <Edit2 className="w-4 h-4 text-blue-500" />
                    </div>
                </div>

                {/* Birthday Field */}
                <div className="mb-4">
                    <label className="text-sm text-gray-300 mb-1 block">Geburtsdatum</label>
                    <div className="flex items-center justify-between bg-white/5 rounded-md p-3">
                        <span className="text-white">07.08.2003</span>
                        <Edit2 className="w-4 h-4 text-blue-500" />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <Button 
                variant="default" 
                className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
            >
                Abmelden
            </Button>

            <Button 
                variant="default" 
                className="w-full bg-blue-900 hover:bg-blue-950"
            >
                Account löschen
            </Button>
        </div>
    );
}
