/**
 * Awaiter
 * Suspense boundaries enables render fallback UI
 * for parts of page that depends on slow data request.
 * But they requires to create component boundaries for those requests.
 *
 * ** Without <Awaiter /> **
 * ```
 * async function ProductAsync () {
 *   const product = await getProduct();
 *   ...
 * }
 *
 * function Product() {
 *  return (
 *    <Suspence fallback={<Spinner />}>
 *       <ProductAsync />
 *    </Suspence>
 *  )
 * }
 * ```
 *
 * ** With <Awaiter /> **
 * ```
 * <Suspense fallback={<Spinner />}>
 *  <Awaiter promise={getProduct()}>
 *    {x => <Item key={x.id} product={x} />}
 *  </Awaiter>
 * </Suspense>
 * ```
 */
export default async function Awaiter<T>({
  promise,
  children,
}: {
  promise: Promise<T>;
  children: (result: T) => JSX.Element | JSX.Element[];
}) {
  const result = await promise;
  return children(result);
}
