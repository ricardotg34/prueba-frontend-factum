import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { ProductsService } from '../services/products.service';
import { formatDate } from '../utills';
import { priceEvolutionOptions } from '../utills/graphic-options';

const PriceEvolutionGraph = () => {
  const [series, setSeries] = useState<ApexAxisChartSeries>([]);
  const [options, setOptions] = useState<ApexCharts.ApexOptions>(priceEvolutionOptions);
  const productsService = ProductsService.getInstance();

  const getValues = async () => {
    const data = await productsService.getPriceEvolution();
    const categories = data
    .reduce<Date[]>((acc, obj) => {
      const date = new Date(obj.dateExtraction)
      if(!acc.some((val) => val.getTime() === date.getTime())) {
        acc.push(date)
      }
      return acc;
    },[])
    .sort((a, b) => a.getTime() - b.getTime());

    const bySku = data
    .reduce<Record<string, { name: string, data: number[] }>>((acc, obj) => {
      const key = obj['sku'];
      acc[key] ??= {
        name: obj.name,
        data: new Array(categories.length).fill(null)
      };
      acc[key].data.splice(categories.findIndex((date) => date.getTime() === new Date(obj.dateExtraction).getTime()), 1, obj.price);
      return acc;
    }, {});
    setSeries(Object.values(bySku));
    setOptions((prevOptions) => ({...prevOptions,   xaxis: {
      categories: categories.map((date) => formatDate(date)) }}) )
  }

  useEffect(() => {
    getValues()
  }, [])

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Chart options={options} series={series} type="line" height={350} />
    </Box>
  )
}

export default PriceEvolutionGraph;