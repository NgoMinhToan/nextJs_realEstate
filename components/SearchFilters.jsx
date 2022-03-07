import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flex, Box, Text, Button, Select, Input, Spinner, Icon } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from  '../utils/filterData';

import React from 'react'

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const { query } = router;
    const path = router.pathname;
    const values = getFilterValues(filterValues);
    values.forEach(item => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    })
    router.push({pathname: path, query})

  }

  return (
    <Flex p='4' bg='gray.100' justifyContent='center' flexWrap='wrap'>
      {filters.map(f => (
        <Box key={f.queryName}>
          <Select
            placeholder={f.placeholder}
            w='fit-content'
            p='2'
            onChange={e => searchProperties({[f.queryName] : e.target.value})}
          >
            {f?.items.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
)
}

export default SearchFilters