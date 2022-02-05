import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {
    return (
        <>
            <Link href="/">
                <Image src="/Logo.svg" width="240px" height="26px" />
            </Link>
        </>
    )
}
