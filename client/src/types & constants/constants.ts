/******************************************************************************/
/*                                                                            */
/*                                                        :::      ::::::::   */
/*                                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*                                                  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Jalbers42                                         #+#    #+#             */
/*   https://github.com/Jalbers42                     ###   ###########       */
/*                                                                            */
/******************************************************************************/

export const DefaultTileFields = {
  focus: false,
  preMove: false,
  lastMove: false,
  possibleMove: false
};

export const CHESSBOARD : string[][] = [
    ['br','bn','bb','bq','bk','bb','bn','br'],
    ['bp','bp','bp','bp','bp','bp','bp','bp'],
    ['00','00','00','00','00','00','00','00'],
    ['00','00','00','00','00','00','00','00'],
    ['00','00','00','00','00','00','00','00'],
    ['00','00','00','00','00','00','00','00'],
    ['wp','wp','wp','wp','wp','wp','wp','wp'],
    ['wr','wn','wb','wq','wk','wb','wn','wr']
]

export const COLUMNS : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];