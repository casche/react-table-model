import React from 'react';
import Table from '../src';

const Basic = () => (
    <Table>
        <Table.Head>
            <Table.HeadRow>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Allowance</Table.HeadCell>
            </Table.HeadRow>
        </Table.Head>
        <Table.Body>
            <Table.BodyRow>
                <Table.BodyCell>Ed</Table.BodyCell>
                <Table.BodyCell>$75.00</Table.BodyCell>
            </Table.BodyRow>
            <Table.BodyRow>
                <Table.BodyCell>Matt</Table.BodyCell>
                <Table.BodyCell>$100</Table.BodyCell>
            </Table.BodyRow>
            <Table.BodyRow>
                <Table.BodyCell>Jeff</Table.BodyCell>
                <Table.BodyCell>$125.00</Table.BodyCell>
            </Table.BodyRow>
        </Table.Body>
        <Table.Foot>
            <Table.FootRow>
                <Table.FootCell>Total</Table.FootCell>
                <Table.FootCell>$300.00</Table.FootCell>
            </Table.FootRow>
        </Table.Foot>
    </Table>
);

export default Basic;
