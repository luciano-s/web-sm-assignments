import React from 'react';
import './product-table.css';

const ProductTable = () => (
    <div className="main-div">
        <table>
            <thead>
                <th>Código</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço de Entrada</th>
                <th>Qtd. Estoque</th>
                <th>Qtd. Solicitada</th>
            </thead>
            <tbody>

                <tr className="soft-blue">
                    <td>001</td>
                    <td>Parafuso Sextavado</td>
                    <td>Parafuso sextavado 1/8"</td>
                    <td>R$0,50</td>
                    <td>1000</td>
                    <td>176</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Cimento - [Marca]</td>
                    <td>Cimento da marca [marca] pacote de 20kg</td>
                    <td>R$50</td>
                    <td>537</td>
                    <td>5</td>
                </tr>
                <tr className="soft-blue">
                    <td>003</td>
                    <td>Argamassa - [Marca]</td>
                    <td>Argamassa da marca [marca] pacote de 1kg</td>
                    <td>R$23,99</td>
                    <td>398</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Porcelanato - [Marca]</td>
                    <td>Porcelanato da marca [marca] m²</td>
                    <td>R$18,99</td>
                    <td>1399</td>
                    <td>50</td>
                </tr>
            </tbody>
        </table>
    </div>

);


export default ProductTable;