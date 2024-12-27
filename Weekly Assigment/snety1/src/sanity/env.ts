// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-26'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'production'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   '17yj7he3'
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }



export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-26'

  export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

  export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '17yj7he3'