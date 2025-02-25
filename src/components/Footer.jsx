import { Dangerous as XIcon, FacebookOutlined, Instagram, Twitter, YouTube } from "@mui/icons-material";


const Footer = () => {
    return (
        <footer className="bg-[#000031] text-indigo-200 px-6">
            <div className="flex flex-wrap gap-y-8 justify-between py-6">
                <div className="w-72 text-sm">
                    <h5 className="font-mono text-xl mb-3">TechAestheti<XIcon /></h5>
                    <p>TechAesthetix is the ultimate NFT marketplace where you can discover, trade and create unique digital ssests. Join our community and explore the future of digital ownership.</p>
                    <p>Link "Learn More About Us"</p>
                    <div className="flex gap-4 text-indigo-200 mt-2">
                        <Twitter fontSize="large" className="hover:text-white hover:cursor-pointer" />
                        <Instagram fontSize="large" className="hover:text-white hover:cursor-pointer" />
                        <YouTube fontSize="large" className="hover:text-white hover:cursor-pointer" />
                        <FacebookOutlined fontSize="large" className="hover:text-white hover:cursor-pointer" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h5 className="text-xl mb-3">Quick Links</h5>
                        <div className="site_map flex flex-col gap-3 text-sm">
                            <a href="" >Explore</a>
                            <a href="" >Collections</a>
                            <a href="" >Create</a>
                            <a href="" >Marketplace</a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl mb-3">Resources</h5>
                        <div className="site_map flex flex-col gap-3 text-sm">
                            <a href="" >Help Center</a>
                            <a href="" >Guides</a>
                            <a href="" >Documentation</a>
                            <a href="" >API Access</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-center border-t border-t-indigo-200 py-2">All rights reserved &copy;2024TechAesthetix</p>
        </footer>
    )
}

export default Footer;