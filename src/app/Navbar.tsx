import Image from 'next/image'
export function Navbar() {
    return (<div className='w-full mb-8' style={{ backgroundColor: "#052849" }}>
        <div>
            <Image width={30} height={30} src="/stackline_logo.png" alt="Stackline" />
        </div>
    </div>)
}