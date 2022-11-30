type Schema = {
    address: string
    metadata?: {
        type: 'external' | 'contract'
        name: string
        description?: string
    },
    diagnosis?: {
        /**
         * Does the contract is a proxy contract?
         */
        proxied?: boolean

        /**
         * Does the contract code has been verifed?
         */
        verified?: boolean

        /**
         * Always keep consistency across multi-chains.
         */
         consistent?: boolean
    }
}[]