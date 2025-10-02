<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Log;
use Route;

class dashboardController extends Controller
{
    public function getDestinationList(Request $request)
    {
        $searchQuery = $request->get('q', '');

        Log::info("Fetching destinations for query: '{$searchQuery}'");

        $headers = [
            'Authorization' => 'Bearer ' . env('TOKEN'),
            'Accept' => 'application/json'
        ];

        $queries = ['query' => $searchQuery];

        try {
            $response = Http::withHeaders($headers)
                ->timeout(30)
                ->get(env('BASE_URL') . 'api/v1/destinations', $queries);

            Log::info("External API Response Status: " . $response->status());

            if ($response->successful()) {
                $data = $response->json();
                Log::info("External API Data Type: " . gettype($data));
                Log::info("External API Data Sample: " . json_encode(array_slice($data, 0, 3)));

                // Process data
                $results = [];
                foreach ($data as $id => $text) {
                    $results[] = [
                        'id' => $id,
                        'text' => $text
                    ];
                }

                Log::info("Processed results count: " . count($results));

                return response()->json([
                    'success' => true,
                    'results' => $results,
                    'count' => count($results)
                ]);

            } else {
                Log::warning("External API failed. Status: " . $response->status());
                return response()->json([
                    'success' => false,
                    'results' => [],
                    'error' => 'External API error'
                ], 400);
            }

        } catch (\Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'results' => [],
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function postOngkir(Request $request)
    {

        $headers = [
            'Authorization' => 'Bearer ' . env('TOKEN'),
            'Accept' => 'application/json'
        ];

        try {
            $response = Http::withHeaders($headers)
                ->timeout(30)
                ->post(env('BASE_URL') . 'api/v1/get-costs', $request);

            if ($response->successful()) {
                $data = $response->json();

                return response()->json([
                    'success' => true,
                    'results' => $data,
                ]);

            } else {

                return response()->json([
                    'success' => false,
                    'results' => [],
                    'error' => 'External API error'
                ], 400);
            }

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'results' => [],
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function postOngkirMotor(Request $request)
    {

        $headers = [
            'Authorization' => 'Bearer ' . env('TOKEN'),
            'Accept' => 'application/json'
        ];

        try {
            $response = Http::withHeaders($headers)
                ->timeout(30)
                ->post(env('BASE_URL') . 'api/v1/get_mtr_costs', $request);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'success' => true,
                    'results' => $data,
                ]);

            } else {
                return response()->json([
                    'success' => false,
                    'results' => [],
                    'error' => 'External API error'
                ], 400);
            }

        } catch (\Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'results' => [],
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function getResiDetail($noresi)
    {
        // dd($request);
        $headers = [
            'Authorization' => 'Bearer ' . env('TOKEN'),
            'Accept' => 'application/json'
        ];

        try {
            // echo($request);
            $response = Http::withHeaders($headers)
                ->timeout(30)
                ->get(env('BASE_URL') . 'api/v1/receipts/' . $noresi);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'success' => true,
                    'results' => $data,
                ]);

            } else {
                return response()->json([
                    'success' => false,
                    'results' => [],
                    'error' => 'External API error'
                ], 400);
            }

        } catch (\Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'results' => [],
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {

        return Inertia::render('home');
    }
}
