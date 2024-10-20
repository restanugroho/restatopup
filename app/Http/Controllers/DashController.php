<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Webs;
use Inertia\Inertia;

class DashController extends Controller
{
    public function index() {
        $webNama = Webs::find(1);
        return Inertia::render("Dashboard", [
            "NamaWebnya"=> $webNama ? $webNama->name : "RestaTopup",
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            "NamaWeb"=> "required|string|max:25",
        ]);

        Webs::updateOrCreate(
            ["id" => 1],
            ["name"=> $request->NamaWeb]
        );

        return redirect()->back()->with("success","Nama Website Berhasil Disimpan.");
    }
}
