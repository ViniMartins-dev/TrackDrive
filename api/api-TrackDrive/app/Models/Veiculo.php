<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $fillable = [
        'modelo',
        'montadora',
        'ano',
        'cor',
        'placa',
        'status',
    ];
}
