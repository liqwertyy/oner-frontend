'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchPromos } from '../srvices/fetch';

const usePromosQuery = () => {
    return useQuery({   
        // queryFn: () => fetchCategories(),
        queryFn: fetchPromos,
        queryKey: ['promo'],
        staleTime: 1000 * 5,
    });
};

export { usePromosQuery };  