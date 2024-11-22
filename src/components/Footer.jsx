import { Dangerous as XIcon, FacebookOutlined, Instagram, Twitter, YouTube } from "@mui/icons-material";


const Footer = () => {
    return (
        <footer className="bg-[#000031] text-indigo-200 px-6">
            <div className="flex justify-between py-6">
                <div className="w-72 text-sm">
                    <h5 className="font-mono text-xl mb-3">TechAestheti<XIcon /></h5>
                    <p>TechAesthetix is the ultimate NFT marketplace where you can discover, trade and create unique digital ssests. Join our community and explore the future of digital ownership.</p>
                    <p>Link "Learn More About Us"</p>
                    <div className="flex gap-4 text-indigo-200 mt-2">
                        <Twitter fontSize="large" />
                        <Instagram fontSize="large" />
                        <YouTube fontSize="large" />
                        <FacebookOutlined fontSize="large" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h5 className="text-xl mb-3">Quick Links</h5>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href="" className="hover:font-bold">Explore</a>
                            <a href="" className="hover:font-bold">Collections</a>
                            <a href="" className="hover:font-bold">Create</a>
                            <a href="" className="hover:font-bold">Marketplace</a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl mb-3">Resources</h5>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href="" className="hover:font-bold">Help Center</a>
                            <a href="" className="hover:font-bold">Guides</a>
                            <a href="" className="hover:font-bold">Documentation</a>
                            <a href="" className="hover:font-bold">API Access</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-center border-t border-t-indigo-200 py-2">All rights reserved &copy;2024TechAesthetix</p>
        </footer>
    )
}

export default Footer;