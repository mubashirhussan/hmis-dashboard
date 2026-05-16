/**
 * Side-effect imports: each file calls `baseApi.injectEndpoints(...)`.
 * Import this module once before `configureStore`, e.g. from `lib/store/store.ts`.
 */
import "@/features/patient/api";
import "@/features/opd/api";
import "@/features/ipd/api";
import "@/features/pharmacy/api";
import "@/features/laboratory/api";
import "@/features/finance/api";
