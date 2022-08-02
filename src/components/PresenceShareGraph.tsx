import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { ProductsService } from '../services/products.service';
import { presenceGraphOptions } from '../utills/graphic-options';

const PresenceShareGraph = () => {
  const [series, setSeries] = useState<ApexNonAxisChartSeries>([]);
  const [options, setOptions] = useState<ApexCharts.ApexOptions>(presenceGraphOptions);
  const productsService = ProductsService.getInstance();

  const getValues = async () => {
    const data = await productsService.getPresentShare();
    const mappedData = data.map((prod) => prod.presenceShare);
    const labels = data.map((prod) => prod.name);
    setSeries(mappedData);
    setOptions((prevOptions) => ({
      ...prevOptions,
      labels
    }));
  }

  useEffect(() => {
    getValues()
  }, [])

  return (
    <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', flex: 1 }}>
      <Chart options={options} series={series} type="pie"  width={500} />
    </Box>
  )
}

export default PresenceShareGraph;