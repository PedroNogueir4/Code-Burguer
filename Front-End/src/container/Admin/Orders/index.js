import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import Row from './row'
import status from './order-status'
import { Container, Menu, LinkMenu } from './styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [filteredOrders, setFilteredOrders] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setFilteredOrders(data)
    }
    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(order => createData(order))
    setRows(newRows)
  }, [filteredOrders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const filterOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(filterOrders)
    }
  }

  const newStatus = [{ id: 1, label: 'Todos', value: 'Todos' }, ...status]

  return (
    <Container>
      <Menu>
        {newStatus &&
          newStatus.map(status => (
            <LinkMenu
              isActive={activeStatus === status.id}
              onClick={() => {
                setActiveStatus(status.id)
                handleStatus(status)
              }}
              key={status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
export default Orders
