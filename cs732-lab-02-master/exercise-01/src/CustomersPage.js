import styles from './CustomersPage.module.css';
import CustomerTable from './CustomerTable';
import { useState } from 'react';
import { initialCustomers } from './data';

export default function CustomersPage() {

    const [customers, setCustomers] = useState(initialCustomers);

    return (
        <>
            <main>
                <div className="box">
                    <CustomerTable customers={customers} />
                </div>
            </main>
        </>
    )
}